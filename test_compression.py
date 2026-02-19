from PIL import Image
import os

def test_compression(filename, colors):
    src_path = os.path.join(r"E:\Kalimat\www\Quran_Pages", filename)
    dest_path = f"E:\\Kalimat\\test_{filename.split('.')[0]}_{colors}.png"
    
    try:
        with Image.open(src_path) as img:
            original_size = os.path.getsize(src_path)
            
            # Convert to RGBA first to ensure consistent quantization source
            img = img.convert("RGBA")
            
            # Quantize to specified colors (with dithering to preserve anti-aliasing)
            # method=2 (FASTOCTREE) for RGBA
            q_img = img.quantize(colors=colors, method=2)
            
            # Save optimized
            q_img.save(dest_path, "PNG", optimize=True)
            
            new_size = os.path.getsize(dest_path)
            reduction = (1 - new_size/original_size) * 100
            
            print(f"{filename} ({colors} colors): {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({reduction:.1f}%)")
            
    except Exception as e:
        print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    test_compression("002.png", 16)
    test_compression("002.png", 8)
    test_compression("042.png", 16)
    test_compression("042.png", 8)
    # Also test the outlier 003.png
    test_compression("003.png", 16)
