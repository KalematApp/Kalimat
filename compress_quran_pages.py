import os
from PIL import Image
import sys

def compress_images(source_dir, dest_dir):
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    files = [f for f in os.listdir(source_dir) if f.lower().endswith('.png')]
    total_original_size = 0
    total_compressed_size = 0

    print(f"Found {len(files)} PNG images.")
    print("Compressing with 16-color quantization (Fast Octree)...")
    
    for i, filename in enumerate(files):
        src_path = os.path.join(source_dir, filename)
        dest_path = os.path.join(dest_dir, filename)
        
        try:
            with Image.open(src_path) as img:
                original_size = os.path.getsize(src_path)
                total_original_size += original_size
                
                # Convert to RGBA first to ensure consistent quantization source
                img = img.convert("RGBA")
                
                # Quantize to 16 colors using Fast Octree (method=2)
                # This handles transparency correctly for RGBA images
                q_img = img.quantize(colors=16, method=2)
                
                # Save optimized
                q_img.save(dest_path, 'PNG', optimize=True)
                
                compressed_size = os.path.getsize(dest_path)
                total_compressed_size += compressed_size
                
                reduction = (1 - compressed_size / original_size) * 100
                print(f"[{i+1}/{len(files)}] {filename}: {original_size/1024:.1f}KB -> {compressed_size/1024:.1f}KB ({reduction:.1f}%)")
                
        except Exception as e:
            print(f"Error processing {filename}: {e}")

    print("-" * 30)
    print(f"Total Original: {total_original_size / (1024*1024):.2f} MB")
    print(f"Total Compressed: {total_compressed_size / (1024*1024):.2f} MB")
    print(f"Total Reduction: {(1 - total_compressed_size / total_original_size) * 100:.1f}%")

if __name__ == "__main__":
    source = r"E:\Kalimat\www\Quran_Pages"
    destination = r"E:\Kalimat\www\Quran_Pages_Optimized"
    compress_images(source, destination)
