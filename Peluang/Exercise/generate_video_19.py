import os
import math
import wave
import struct
import subprocess
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# ==============================================================================
# KONFIGURASI VIDEO MOTION GRAPHIC @KulikMath
# Resolusi: 1080x1920 (9:16 Vertical Reels / TikTok / Shorts)
# Soal: Peluang Exercise Nomor 19
# ==============================================================================

W, H = 1080, 1920
FPS = 30
DURATION = 21.0
TOTAL_FRAMES = int(DURATION * FPS)

FFMPEG_PATH = r"C:\Users\idham\AppData\Local\CutVii\binaries\ffmpeg.exe"
if not os.path.exists(FFMPEG_PATH):
    FFMPEG_PATH = r"C:\Program Files\Softdeluxe\Free Download Manager\ffmpeg.exe"

OUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_MP4 = os.path.join(OUT_DIR, "soal_19_kulikmath.mp4")
TEMP_WAV = os.path.join(OUT_DIR, "_temp_audio_19.wav")

# Load Fonts
FONT_DIR = r"C:\Windows\Fonts"
def load_font(name, size):
    path = os.path.join(FONT_DIR, name)
    if os.path.exists(path):
        return ImageFont.truetype(path, size)
    return ImageFont.truetype(os.path.join(FONT_DIR, "arial.ttf"), size)

F_BOLD_44 = load_font("segoeuib.ttf", 44)
F_BOLD_38 = load_font("segoeuib.ttf", 38)
F_BOLD_34 = load_font("segoeuib.ttf", 34)
F_BOLD_30 = load_font("segoeuib.ttf", 30)
F_BOLD_28 = load_font("segoeuib.ttf", 28)
F_BOLD_24 = load_font("segoeuib.ttf", 24)
F_BOLD_22 = load_font("segoeuib.ttf", 22)
F_BOLD_20 = load_font("segoeuib.ttf", 20)

F_SEMI_30 = load_font("seguisb.ttf", 30)
F_SEMI_26 = load_font("seguisb.ttf", 26)
F_SEMI_24 = load_font("seguisb.ttf", 24)
F_SEMI_22 = load_font("seguisb.ttf", 22)
F_REG_22  = load_font("segoeui.ttf", 22)
F_REG_20  = load_font("segoeui.ttf", 20)

# Palet Warna Modern Dark UI
C_BG_TOP     = (10, 15, 29)
C_BG_BOT     = (15, 23, 42)
C_CARD_BG    = (20, 30, 51, 235)
C_CARD_DARK  = (13, 20, 36, 240)
C_BORDER     = (42, 58, 89, 255)
C_TEXT_WHITE = (248, 250, 252, 255)
C_TEXT_MUTED = (148, 163, 184, 255)
C_CYAN       = (56, 189, 248, 255)
C_CYAN_GLOW  = (14, 165, 233, 255)
C_AMBER      = (251, 191, 36, 255)
C_AMBER_BG   = (69, 42, 14, 220)
C_EMERALD    = (52, 211, 153, 255)
C_EMERALD_BG = (12, 58, 46, 220)
C_ROSE       = (251, 113, 133, 255)
C_ROSE_BG    = (69, 18, 34, 220)
C_INDIGO     = (129, 140, 248, 255)

# ==============================================================================
# FUNGSI EASING & UTILITAS GAMBAR
# ==============================================================================

def clamp(val, lo=0.0, hi=1.0):
    return max(lo, min(hi, val))

def prog(t, t_start, duration):
    if duration <= 0:
        return 1.0 if t >= t_start else 0.0
    return clamp((t - t_start) / duration)

def ease_out_cubic(x):
    return 1.0 - pow(1.0 - x, 3)

def ease_out_back(x):
    c1 = 1.70158
    c3 = c1 + 1.0
    return 1.0 + c3 * pow(x - 1.0, 3) + c1 * pow(x - 1.0, 2)

def ease_in_out_sine(x):
    return -(math.cos(math.pi * x) - 1.0) / 2.0

def alpha_color(color, alpha_mult):
    r, g, b = color[:3]
    a = color[3] if len(color) > 3 else 255
    return (r, g, b, int(clamp(a * alpha_mult, 0, 255)))

def draw_text_centered(draw, x, y, text, font, fill):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((x - tw / 2, y - th / 2 - bbox[1]), text, font=font, fill=fill)

def draw_fraction(draw, cx, cy, num_str, den_str, font, color, bar_w=42, gap=6, bar_h=3):
    """Menggambar pecahan matematika bersusun (pembilang / garis / penyebut)"""
    nb = draw.textbbox((0, 0), num_str, font=font)
    nw, nh = nb[2] - nb[0], nb[3] - nb[1]
    db = draw.textbbox((0, 0), den_str, font=font)
    dw, dh = db[2] - db[0], db[3] - db[1]

    w = max(bar_w, max(nw, dw) + 14)
    # Garis pecahan
    draw.rounded_rectangle(
        [cx - w // 2, cy - bar_h // 2, cx + w // 2, cy + bar_h // 2],
        radius=1, fill=color
    )
    # Pembilang di atas garis
    draw.text((cx - nw / 2, cy - gap - nh - nb[1]), num_str, font=font, fill=color)
    # Penyebut di bawah garis
    draw.text((cx - dw / 2, cy + gap - db[1]), den_str, font=font, fill=color)

# ==============================================================================
# PRE-RENDER BACKGROUND CANVAS
# ==============================================================================

def create_base_background():
    bg = Image.new("RGBA", (W, H), (10, 15, 29, 255))
    # Buat gradien vertikal + ambient glow menggunakan numpy
    y_idx = np.linspace(0, 1, H)[:, None]
    x_idx = np.linspace(0, 1, W)[None, :]

    r = C_BG_TOP[0] * (1 - y_idx) + C_BG_BOT[0] * y_idx
    g = C_BG_TOP[1] * (1 - y_idx) + C_BG_BOT[1] * y_idx
    b = C_BG_TOP[2] * (1 - y_idx) + C_BG_BOT[2] * y_idx

    # Ambient radial glow kiri atas (cyan) & kanan bawah (indigo)
    d1 = (x_idx - 0.15) ** 2 + (y_idx - 0.12) ** 2
    glow1 = np.exp(-d1 / 0.08)
    d2 = (x_idx - 0.85) ** 2 + (y_idx - 0.78) ** 2
    glow2 = np.exp(-d2 / 0.10)

    r = np.clip(r + glow1 * 8 + glow2 * 22, 0, 255).astype(np.uint8)
    g = np.clip(g + glow1 * 38 + glow2 * 18, 0, 255).astype(np.uint8)
    b = np.clip(b + glow1 * 62 + glow2 * 55, 0, 255).astype(np.uint8)
    a = np.full((H, W), 255, dtype=np.uint8)

    arr = np.dstack([r, g, b, a])
    bg = Image.fromarray(arr, mode="RGBA")
    draw = ImageDraw.Draw(bg, "RGBA")

    # Grid matematika tipis
    grid_step = 60
    for x in range(0, W, grid_step):
        draw.line([(x, 0), (x, H)], fill=(148, 163, 184, 12), width=1)
    for y in range(0, H, grid_step):
        draw.line([(0, y), (W, y)], fill=(148, 163, 184, 12), width=1)

    return bg

BASE_BG = create_base_background()

# ==============================================================================
# PEMBUATAN EFEK SUARA (AUDIO TRACK SYNTHESIS)
# ==============================================================================

def generate_audio_track(filename):
    sr = 44100
    n_samples = int(DURATION * sr)
    t = np.linspace(0, DURATION, n_samples, endpoint=False)
    audio = np.zeros(n_samples, dtype=np.float64)

    # Ambient warm pad (C major 9th chord: C4, E4, G4, B4, D5) sangat lembut
    chord_freqs = [261.63, 329.63, 392.00, 493.88, 587.33]
    for f in chord_freqs:
        audio += 0.015 * np.sin(2 * np.pi * f * t) * (0.7 + 0.3 * np.sin(2 * np.pi * 0.25 * t))

    # Fade in & fade out musik latar
    fade_len = int(1.2 * sr)
    audio[:fade_len] *= np.linspace(0, 1, fade_len)
    audio[-fade_len:] *= np.linspace(1, 0, fade_len)

    def add_pop(time_sec, freq=520.0, dur=0.09, vol=0.14):
        idx = int(time_sec * sr)
        length = int(dur * sr)
        if idx + length >= n_samples:
            return
        lt = np.linspace(0, dur, length, endpoint=False)
        env = np.exp(-lt * 35.0) * np.sin(np.pi * lt / dur)
        # Pitch sedikit naik untuk efek pop ceria
        inst_freq = freq * (1.0 + 0.35 * np.exp(-lt * 40.0))
        tone = vol * env * np.sin(2 * np.pi * inst_freq * lt)
        audio[idx:idx + length] += tone

    def add_chime(time_sec, freqs, dur=0.45, vol=0.12):
        idx = int(time_sec * sr)
        length = int(dur * sr)
        if idx + length >= n_samples:
            return
        lt = np.linspace(0, dur, length, endpoint=False)
        env = np.exp(-lt * 7.5)
        for i, f in enumerate(freqs):
            tone = (vol / len(freqs)) * env * np.sin(2 * np.pi * f * lt)
            audio[idx:idx + length] += tone

    # Sound cues sinkron dengan animasi
    add_pop(0.2, 440, 0.12, 0.15)  # Soal muncul
    for i in range(5):
        add_pop(0.8 + i * 0.10, 500 + i * 40, 0.08, 0.10)  # Pilgan A-E
    for i in range(6):
        add_pop(1.6 + i * 0.12, 420 + i * 55, 0.09, 0.13)  # 6 Bola muncul

    add_chime(4.1, [523.25, 659.25], 0.35, 0.15)   # Kejadian A
    add_chime(6.3, [587.33, 783.99], 0.35, 0.15)   # Kejadian B
    add_chime(8.5, [659.25, 880.00], 0.35, 0.15)   # Irisan A n B

    add_pop(10.6, 480, 0.12, 0.14)                 # Rumus
    add_pop(12.3, 540, 0.12, 0.14)                 # Substitusi
    add_pop(14.1, 600, 0.12, 0.14)                 # 3/6
    add_chime(15.8, [523.25, 659.25, 783.99, 1046.50], 0.65, 0.22)  # Hasil 1/2!
    add_chime(17.6, [659.25, 783.99, 987.77, 1318.51], 0.80, 0.24)  # Jawab D!

    # Normalisasi ke 16-bit PCM stereo
    audio = np.clip(audio, -0.95, 0.95)
    pcm = (audio * 32767).astype(np.int16)
    stereo = np.column_stack([pcm, pcm]).flatten()

    with wave.open(filename, "wb") as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(sr)
        wf.writeframes(stereo.tobytes())

# ==============================================================================
# RENDER FRAME DEMI FRAME
# ==============================================================================

def render_frame(t):
    frame = BASE_BG.copy()
    draw = ImageDraw.Draw(frame, "RGBA")

    # --------------------------------------------------------------------------
    # 1. HEADER BAR & BRANDING @KulikMath (Y: 50 .. 160)
    # --------------------------------------------------------------------------
    p_head = ease_out_cubic(prog(t, 0.0, 0.6))
    if p_head > 0:
        hy = int(52 + (1 - p_head) * (-30))
        # Badge kiri: PELUANG • SOAL #19
        draw.rounded_rectangle(
            [56, hy, 430, hy + 52],
            radius=26,
            fill=alpha_color((14, 116, 144, 90), p_head),
            outline=alpha_color(C_CYAN, p_head),
            width=2
        )
        draw_text_centered(draw, 243, hy + 26, "PELUANG  •  SOAL #19", F_BOLD_24, alpha_color(C_CYAN, p_head))

        # Badge kanan: @KulikMath
        draw.rounded_rectangle(
            [720, hy, 1024, hy + 52],
            radius=26,
            fill=alpha_color((30, 41, 59, 200), p_head),
            outline=alpha_color(C_INDIGO, p_head),
            width=2
        )
        # Titik aksen
        draw.ellipse([742, hy + 18, 758, hy + 34], fill=alpha_color(C_EMERALD, p_head))
        draw_text_centered(draw, 882, hy + 26, "@KulikMath", F_BOLD_26 if hasattr(F_BOLD_24, 'x') else F_BOLD_24, alpha_color(C_TEXT_WHITE, p_head))

        # Subtitle sumber
        draw.text(
            (60, hy + 62),
            "Sumber: Smart Step TKA Matematika, Liniswara",
            font=F_REG_20,
            fill=alpha_color(C_TEXT_MUTED, p_head)
        )

    # --------------------------------------------------------------------------
    # 2. KARTU SOAL & PILIHAN GANDA (Y: 165 .. 535)
    # --------------------------------------------------------------------------
    p_soal = ease_out_cubic(prog(t, 0.15, 0.65))
    if p_soal > 0:
        sy = int(168 + (1 - p_soal) * 35)
        draw.rounded_rectangle(
            [56, sy, 1024, sy + 365],
            radius=26,
            fill=alpha_color(C_CARD_BG, p_soal),
            outline=alpha_color(C_BORDER, p_soal),
            width=2
        )
        # Garis aksen kiri pada kartu soal
        draw.rounded_rectangle(
            [56, sy + 24, 64, sy + 195],
            radius=4,
            fill=alpha_color(C_CYAN, p_soal)
        )

        # Teks Soal (4 baris rapi dengan highlight warna kata kunci)
        lines = [
            [("Di dalam kotak terdapat ", C_TEXT_WHITE), ("6 bola", C_CYAN), (" yang diberi nomor ", C_TEXT_WHITE), ("1 sampai 6.", C_CYAN)],
            [("Seseorang akan mengambil ", C_TEXT_WHITE), ("1 bola secara acak", C_TEXT_WHITE), (" dari dalam kotak.", C_TEXT_WHITE)],
            [("Peluang terambil ", C_TEXT_WHITE), ("bola nomor 5", C_AMBER), (" atau ", C_ROSE), ("nomor ganjil", C_EMERALD), (" adalah ....", C_TEXT_WHITE)]
        ]
        for idx_l, segs in enumerate(lines):
            cur_x = 86
            cur_y = sy + 26 + idx_l * 46
            for txt, col in segs:
                f_use = F_BOLD_28 if col != C_TEXT_WHITE else F_SEMI_26
                draw.text((cur_x, cur_y), txt, font=f_use, fill=alpha_color(col, p_soal))
                tb = draw.textbbox((0, 0), txt, font=f_use)
                cur_x += (tb[2] - tb[0])

        # Pilihan Ganda A - E (Y: sy + 185 .. sy + 340)
        opts = [
            ("A", "1", "6"),
            ("B", "1", "4"),
            ("C", "1", "3"),
            ("D", "1", "2"),
            ("E", "5", "6"),
        ]
        p_win = ease_out_back(prog(t, 17.5, 0.6))
        for i, (label, num_s, den_s) in enumerate(opts):
            p_opt = ease_out_back(prog(t, 0.75 + i * 0.10, 0.45))
            if p_opt <= 0:
                continue
            ox = 82 + i * 188
            oy = sy + 185 + int((1 - clamp(p_opt)) * 25)
            ow, oh = 164, 152

            is_correct = (label == "D") and (t >= 17.5)
            if is_correct:
                pulse = int(4 * math.sin((t - 17.5) * 8))
                box_fill = C_EMERALD_BG
                box_border = C_EMERALD
                bw = 4
                ox -= pulse // 2
                oy -= pulse // 2
                ow += pulse
                oh += pulse
            else:
                dim = 0.45 if (t >= 17.5 and not is_correct) else 1.0
                box_fill = alpha_color((15, 23, 42, 220), clamp(p_opt) * dim)
                box_border = alpha_color((51, 65, 85, 255), clamp(p_opt) * dim)
                bw = 2

            draw.rounded_rectangle([ox, oy, ox + ow, oy + oh], radius=20, fill=box_fill, outline=box_border, width=bw)

            # Lingkaran label A/B/C/D/E di kiri atas pilgan
            lbl_col = C_EMERALD if is_correct else C_CYAN
            dim_f = 1.0 if (is_correct or t < 17.5) else 0.45
            draw.ellipse([ox + 14, oy + 14, ox + 48, oy + 48], fill=alpha_color((30, 41, 59, 255), dim_f), outline=alpha_color(lbl_col, dim_f), width=2)
            draw_text_centered(draw, ox + 31, oy + 31, label, F_BOLD_20, alpha_color(lbl_col, dim_f))

            # Pecahan di tengah pilgan
            frac_col = C_EMERALD if is_correct else C_TEXT_WHITE
            draw_fraction(draw, ox + ow // 2 + 12, oy + oh // 2 + 6, num_s, den_s, F_BOLD_30, alpha_color(frac_col, clamp(p_opt) * dim_f), bar_w=38, gap=5)

            if is_correct:
                # Badge BENAR di sudut kanan atas opsi D
                draw.rounded_rectangle([ox + ow - 78, oy - 14, ox + ow + 10, oy + 26], radius=12, fill=C_EMERALD)
                draw_text_centered(draw, ox + ow - 34, oy + 6, "BENAR", F_BOLD_20, (10, 15, 29, 255))

    # --------------------------------------------------------------------------
    # 3. VISUALISASI 6 BOLA — RUANG SAMPEL S (Y: 552 .. 850)
    # --------------------------------------------------------------------------
    p_box = ease_out_cubic(prog(t, 1.4, 0.55))
    if p_box > 0:
        by = int(552 + (1 - p_box) * 30)
        draw.rounded_rectangle(
            [56, by, 1024, by + 296],
            radius=26,
            fill=alpha_color(C_CARD_DARK, p_box),
            outline=alpha_color(C_BORDER, p_box),
            width=2
        )
        # Judul Kotak Visualisasi
        draw.text((86, by + 20), "RUANG SAMPEL  S = { 1, 2, 3, 4, 5, 6 }", font=F_BOLD_24, fill=alpha_color(C_CYAN, p_box))
        draw.rounded_rectangle([835, by + 16, 994, by + 56], radius=14, fill=alpha_color((14, 116, 144, 70), p_box), outline=alpha_color(C_CYAN, p_box), width=2)
        draw_text_centered(draw, 914, by + 36, "n(S) = 6", F_BOLD_24, alpha_color(C_CYAN, p_box))

        # Gambar 6 Bola bernomor 1..6
        for i in range(6):
            num = i + 1
            p_ball = ease_out_back(prog(t, 1.6 + i * 0.12, 0.45))
            if p_ball <= 0:
                continue

            cx = 158 + i * 152
            cy = by + 158 + int((1 - clamp(p_ball)) * 35)
            r = int(52 * clamp(p_ball))

            # Status highlight berdasarkan waktu
            in_A = (num == 5) and (t >= 4.0)
            in_B = (num in (1, 3, 5)) and (t >= 6.2)
            in_AB = (num == 5) and (t >= 8.4)
            in_final = (t >= 15.8)

            # Di akhir, bola yang memenuhi (1, 3, 5) naik sedikit
            if in_final and num in (1, 3, 5):
                p_lift = ease_out_cubic(prog(t, 15.8, 0.5))
                cy -= int(12 * p_lift)

            dim_ball = 0.35 if (in_final and num not in (1, 3, 5)) else 1.0

            # Penentuan warna bola & cincin luar
            if in_AB and t < 15.8:
                pulse_r = int(6 * abs(math.sin((t - 8.4) * 6)))
                draw.ellipse([cx - r - 12 - pulse_r, cy - r - 12 - pulse_r, cx + r + 12 + pulse_r, cy + r + 12 + pulse_r],
                             outline=C_ROSE, width=4)
                draw.ellipse([cx - r - 5, cy - r - 5, cx + r + 5, cy + r + 5],
                             outline=C_AMBER, width=3)
                ball_fill = (190, 24, 93, 255)
                ball_shine = (236, 72, 153, 255)
                ball_border = C_ROSE
            elif in_B:
                if num == 5 and in_A:
                    draw.ellipse([cx - r - 9, cy - r - 9, cx + r + 9, cy + r + 9], outline=C_AMBER, width=3)
                draw.ellipse([cx - r - 4, cy - r - 4, cx + r + 4, cy + r + 4], outline=C_EMERALD, width=3)
                ball_fill = (16, 120, 88, 255)
                ball_shine = (52, 211, 153, 255)
                ball_border = C_EMERALD
            elif in_A:
                draw.ellipse([cx - r - 6, cy - r - 6, cx + r + 6, cy + r + 6], outline=C_AMBER, width=4)
                ball_fill = (180, 105, 14, 255)
                ball_shine = (251, 191, 36, 255)
                ball_border = C_AMBER
            else:
                ball_fill = alpha_color((30, 41, 59, 255), dim_ball)
                ball_shine = alpha_color((71, 85, 105, 255), dim_ball)
                ball_border = alpha_color((100, 116, 139, 255), dim_ball)

            # Lingkaran utama bola
            draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=ball_fill, outline=ball_border, width=3)
            # Busur kilau 3D halus di tepi kiri atas bola (tidak menutupi angka)
            if r > 25:
                draw.arc([cx - r + 8, cy - r + 8, cx + r - 8, cy + r - 8], start=200, end=255, fill=ball_shine, width=3)

            # Angka bola tepat di tengah
            draw_text_centered(draw, cx, cy, str(num), F_BOLD_38, alpha_color(C_TEXT_WHITE, dim_ball))

            # Tag kecil di bawah bola
            tag_y = by + 250
            if in_AB and num == 5:
                draw.rounded_rectangle([cx - 52, tag_y - 17, cx + 52, tag_y + 19], radius=10, fill=C_ROSE_BG, outline=C_ROSE, width=2)
                draw_text_centered(draw, cx, tag_y + 1, "A ∩ B", F_BOLD_20, C_ROSE)
            elif in_B and num in (1, 3, 5):
                draw.rounded_rectangle([cx - 56, tag_y - 17, cx + 56, tag_y + 19], radius=10, fill=C_EMERALD_BG, outline=C_EMERALD, width=2)
                draw_text_centered(draw, cx, tag_y + 1, "Ganjil (B)", F_BOLD_20, C_EMERALD)
            elif in_A and num == 5:
                draw.rounded_rectangle([cx - 50, tag_y - 17, cx + 50, tag_y + 19], radius=10, fill=C_AMBER_BG, outline=C_AMBER, width=2)
                draw_text_centered(draw, cx, tag_y + 1, "No. 5 (A)", F_BOLD_20, C_AMBER)

    # --------------------------------------------------------------------------
    # 4. ANALISIS KEJADIAN A, B, DAN IRISAN A ∩ B (Y: 866 .. 1222)
    # --------------------------------------------------------------------------
    event_cards = [
        (4.0, "Kejadian A (Nomor 5)", "A = { 5 }", "n(A) = 1", "P(A)", "1", "6", C_AMBER, C_AMBER_BG),
        (6.2, "Kejadian B (Nomor Ganjil)", "B = { 1, 3, 5 }", "n(B) = 3", "P(B)", "3", "6", C_EMERALD, C_EMERALD_BG),
        (8.4, "Irisan A dan B (Sama-sama No. 5)", "A ∩ B = { 5 }", "n(A ∩ B) = 1", "P(A ∩ B)", "1", "6", C_ROSE, C_ROSE_BG),
    ]

    for idx_c, (t_start, title_c, set_str, n_str, p_lbl, num_s, den_s, col_main, col_bg) in enumerate(event_cards):
        pc = ease_out_cubic(prog(t, t_start, 0.55))
        if pc <= 0:
            continue
        cy_top = 866 + idx_c * 120 + int((1 - pc) * 28)
        ch = 106

        draw.rounded_rectangle(
            [56, cy_top, 1024, cy_top + ch],
            radius=22,
            fill=alpha_color(C_CARD_BG, pc),
            outline=alpha_color(col_main, pc),
            width=2
        )
        # Strip kiri warna
        draw.rounded_rectangle([56, cy_top + 16, 66, cy_top + ch - 16], radius=4, fill=alpha_color(col_main, pc))

        # Judul & Himpunan di sisi kiri
        draw.text((88, cy_top + 16), title_c, font=F_BOLD_22, fill=alpha_color(col_main, pc))
        draw.text((88, cy_top + 52), f"{set_str}     •     {n_str}", font=F_BOLD_28, fill=alpha_color(C_TEXT_WHITE, pc))

        # Kotak peluang di sisi kanan
        draw.rounded_rectangle(
            [720, cy_top + 10, 1004, cy_top + ch - 10],
            radius=16,
            fill=alpha_color(col_bg, pc),
            outline=alpha_color(col_main, pc),
            width=2
        )
        draw.text((742, cy_top + 32), f"{p_lbl} =", font=F_BOLD_28, fill=alpha_color(C_TEXT_WHITE, pc))
        draw_fraction(draw, 938, cy_top + ch // 2, num_s, den_s, F_BOLD_28, alpha_color(col_main, pc), bar_w=38, gap=4)

    # --------------------------------------------------------------------------
    # 5. PERHITUNGAN RUMUS PELUANG GABUNGAN P(A ∪ B) (Y: 1236 .. 1695)
    # --------------------------------------------------------------------------
    p_calc = ease_out_cubic(prog(t, 10.5, 0.6))
    if p_calc > 0:
        ry = int(1236 + (1 - p_calc) * 30)
        rh = 458
        draw.rounded_rectangle(
            [56, ry, 1024, ry + rh],
            radius=26,
            fill=alpha_color(C_CARD_BG, p_calc),
            outline=alpha_color(C_CYAN, p_calc),
            width=2
        )
        # Header Rumus
        draw.rounded_rectangle(
            [76, ry + 16, 1004, ry + 64],
            radius=14,
            fill=alpha_color((14, 116, 144, 65), p_calc)
        )
        draw_text_centered(draw, 540, ry + 40, "RUMUS PELUANG KEJADIAN TIDAK SALING LEPAS", F_BOLD_22, alpha_color(C_CYAN, p_calc))

        # Baris 1: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
        p_r1 = ease_out_cubic(prog(t, 10.7, 0.5))
        if p_r1 > 0:
            y1 = ry + 112
            c_w = alpha_color(C_TEXT_WHITE, p_r1)
            draw.text((100, y1 - 22), "P(A", font=F_BOLD_34, fill=c_w)
            # Simbol vektor ∪ (gabungan) yang tajam
            ux, uy = 181, y1 + 2
            draw.line([(ux - 9, uy - 11), (ux - 9, uy + 1)], fill=c_w, width=4)
            draw.line([(ux + 9, uy - 11), (ux + 9, uy + 1)], fill=c_w, width=4)
            draw.arc([ux - 9, uy - 8, ux + 9, uy + 10], start=0, end=180, fill=c_w, width=4)
            draw.text((202, y1 - 22), "B)  =", font=F_BOLD_34, fill=c_w)
            # P(A)
            draw.rounded_rectangle([350, y1 - 26, 465, y1 + 28], radius=12, fill=alpha_color(C_AMBER_BG, p_r1), outline=alpha_color(C_AMBER, p_r1), width=2)
            draw_text_centered(draw, 407, y1 + 1, "P(A)", F_BOLD_30, alpha_color(C_AMBER, p_r1))

            draw_text_centered(draw, 502, y1, "+", F_BOLD_34, alpha_color(C_TEXT_WHITE, p_r1))

            # P(B)
            draw.rounded_rectangle([538, y1 - 26, 653, y1 + 28], radius=12, fill=alpha_color(C_EMERALD_BG, p_r1), outline=alpha_color(C_EMERALD, p_r1), width=2)
            draw_text_centered(draw, 595, y1 + 1, "P(B)", F_BOLD_30, alpha_color(C_EMERALD, p_r1))

            draw_text_centered(draw, 692, y1, "−", F_BOLD_34, alpha_color(C_TEXT_WHITE, p_r1))

            # P(A ∩ B)
            draw.rounded_rectangle([728, y1 - 26, 910, y1 + 28], radius=12, fill=alpha_color(C_ROSE_BG, p_r1), outline=alpha_color(C_ROSE, p_r1), width=2)
            draw_text_centered(draw, 819, y1 + 1, "P(A ∩ B)", F_BOLD_30, alpha_color(C_ROSE, p_r1))

        # Baris 2: = 1/6 + 3/6 - 1/6
        p_r2 = ease_out_cubic(prog(t, 12.3, 0.55))
        if p_r2 > 0:
            y2 = ry + 235
            draw.text((285, y2 - 22), "=", font=F_BOLD_34, fill=alpha_color(C_TEXT_WHITE, p_r2))
            draw_fraction(draw, 407, y2, "1", "6", F_BOLD_34, alpha_color(C_AMBER, p_r2), bar_w=46, gap=6)
            draw_text_centered(draw, 502, y2, "+", F_BOLD_34, alpha_color(C_TEXT_WHITE, p_r2))
            draw_fraction(draw, 595, y2, "3", "6", F_BOLD_34, alpha_color(C_EMERALD, p_r2), bar_w=46, gap=6)
            draw_text_centered(draw, 692, y2, "−", F_BOLD_34, alpha_color(C_TEXT_WHITE, p_r2))
            draw_fraction(draw, 819, y2, "1", "6", F_BOLD_34, alpha_color(C_ROSE, p_r2), bar_w=46, gap=6)

        # Baris 3: = 3/6 = 1/2 (Kotak Jawaban)
        p_r3 = ease_out_cubic(prog(t, 14.0, 0.55))
        if p_r3 > 0:
            y3 = ry + 372
            draw.text((285, y3 - 22), "=", font=F_BOLD_34, fill=alpha_color(C_TEXT_WHITE, p_r3))
            draw_fraction(draw, 407, y3, "3", "6", F_BOLD_34, alpha_color(C_CYAN, p_r3), bar_w=46, gap=6)

        p_r4 = ease_out_back(prog(t, 15.8, 0.6))
        if p_r4 > 0:
            y3 = ry + 372
            draw_text_centered(draw, 502, y3, "=", F_BOLD_38, alpha_color(C_TEXT_WHITE, clamp(p_r4)))

            # Kotak ganda berbinar untuk 1/2
            bx1, by1, bx2, by2 = 555, y3 - 66, 705, y3 + 66
            draw.rounded_rectangle([bx1 - 6, by1 - 6, bx2 + 6, by2 + 6], radius=22, outline=alpha_color(C_CYAN, clamp(p_r4)), width=2)
            draw.rounded_rectangle([bx1, by1, bx2, by2], radius=18, fill=alpha_color(C_EMERALD_BG, clamp(p_r4)), outline=alpha_color(C_EMERALD, clamp(p_r4)), width=4)
            draw_fraction(draw, (bx1 + bx2) // 2, y3, "1", "2", F_BOLD_38, alpha_color(C_EMERALD, clamp(p_r4)), bar_w=54, gap=6)

            # Badge JAWAB: D di kanan kotak
            draw.rounded_rectangle([740, y3 - 34, 965, y3 + 34], radius=18, fill=alpha_color(C_EMERALD, clamp(p_r4)))
            draw_text_centered(draw, 852, y3, "JAWAB: D", F_BOLD_30, alpha_color((10, 15, 29, 255), clamp(p_r4)))

    # --------------------------------------------------------------------------
    # 6. KESIMPULAN & FOOTER @KulikMath (Y: 1712 .. 1900)
    # --------------------------------------------------------------------------
    p_end = ease_out_cubic(prog(t, 17.5, 0.6))
    if p_end > 0:
        ey = int(1712 + (1 - p_end) * 25)
        draw.rounded_rectangle(
            [56, ey, 1024, ey + 96],
            radius=22,
            fill=alpha_color(C_EMERALD_BG, p_end),
            outline=alpha_color(C_EMERALD, p_end),
            width=3
        )
        draw_text_centered(
            draw, 540, ey + 48,
            "Jadi, peluang terambil bola nomor 5 atau ganjil adalah 1/2 (D)",
            F_BOLD_26 if hasattr(F_BOLD_24, 'x') else F_BOLD_28,
            alpha_color(C_TEXT_WHITE, p_end)
        )

    # Footer permanen @KulikMath
    draw_text_centered(draw, 540, 1858, "@KulikMath  •  Belajar Matematika Lebih Mudah & Visual", F_SEMI_22, (148, 163, 184, 210))

    # Progress bar di tepi paling bawah
    bar_w_cur = int(W * (t / DURATION))
    draw.rectangle([0, H - 10, W, H], fill=(30, 41, 59, 255))
    draw.rectangle([0, H - 10, bar_w_cur, H], fill=C_CYAN)

    return frame.convert("RGB")

def main():
    print("1. Membuat audio track...")
    generate_audio_track(TEMP_WAV)

    print("2. Merender video 1080x1920 @ 30fps via FFmpeg pipe...")
    cmd = [
        FFMPEG_PATH,
        "-y",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", f"{W}x{H}",
        "-pix_fmt", "rgb24",
        "-r", str(FPS),
        "-i", "-",
        "-i", TEMP_WAV,
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "18",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "192k",
        "-shortest",
        "-movflags", "+faststart",
        OUT_MP4
    ]

    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    # Optimasi: interval waktu di mana layar statis (hanya progress bar bawah yang bergerak)
    static_ranges = [
        (2.4, 3.95),
        (4.65, 6.15),
        (6.85, 8.35),
        (11.3, 12.25),
        (12.95, 13.95),
        (14.65, 15.75),
        (16.5, 17.45),
    ]
    cached_t = None
    cached_arr = None

    for f_idx in range(TOTAL_FRAMES):
        t = f_idx / FPS
        in_static = False
        for s_lo, s_hi in static_ranges:
            if s_lo <= t <= s_hi:
                in_static = True
                if cached_t != s_lo:
                    img = render_frame(s_lo)
                    cached_arr = np.array(img)
                    cached_t = s_lo
                arr = cached_arr.copy()
                bar_w_cur = int(W * (t / DURATION))
                arr[H - 10:H, :, :] = [30, 41, 59]
                arr[H - 10:H, :bar_w_cur, :] = [56, 189, 248]
                proc.stdin.write(arr.tobytes())
                break

        if not in_static:
            img = render_frame(t)
            proc.stdin.write(img.tobytes())

        if f_idx % 120 == 0:
            print(f"   Progress: {f_idx}/{TOTAL_FRAMES} frames ({int(100*f_idx/TOTAL_FRAMES)}%)", flush=True)

    proc.stdin.close()
    proc.wait()

    if os.path.exists(TEMP_WAV):
        os.remove(TEMP_WAV)

    if proc.returncode != 0:
        raise RuntimeError(f"Gagal merender video (exit code {proc.returncode})")

    size_mb = os.path.getsize(OUT_MP4) / (1024 * 1024)
    print(f"Selesai! Video tersimpan di: {OUT_MP4} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    main()
