from PIL import Image
import os

def check_images(directory):
    files = [f for f in os.listdir(directory) if f.endswith('.png')][:5]
    print(f"Checking first 5 images in {directory}...")
    
    for f in files:
        path = os.path.join(directory, f)
        with Image.open(path) as img:
            print(f"File: {f}")
            print(f"  Format: {img.format}")
            print(f"  Mode: {img.mode}")
            print(f"  Size: {img.size}")
            if img.mode == 'P':
                palette = img.getpalette()
                if palette:
                    # simplistic check for unique colors used
                    # (actual unique colors requires iterating pixels which is slow, just checking palette length)
                    print(f"  Palette Length: {len(palette)//3} colors")

if __name__ == "__main__":
    check_images(r"E:\Kalimat\www\Quran_Pages")
