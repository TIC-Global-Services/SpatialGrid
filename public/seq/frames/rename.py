import os

def extract_number(name):
    # frame_0018.webp -> 18
    return int(name.split("_")[1].split(".")[0])

# 1. Read and SORT BY FRAME NUMBER (THIS IS THE FIX)
files = sorted(
    (f for f in os.listdir(".") if f.startswith("frame_") and f.endswith(".webp")),
    key=extract_number
)

print("Order preview (first 5):")
for f in files[:5]:
    print(f)

# 2. Temp rename WITH ZERO-PADDED INDEX (prevents lexicographic bug)
for i, filename in enumerate(files):
    os.rename(filename, f"__tmp__{i:06d}.webp")

# 3. Read temp files and SORT NUMERICALLY AGAIN
temp_files = sorted(
    (f for f in os.listdir(".") if f.startswith("__tmp__")),
    key=lambda x: int(x.split("__tmp__")[1].split(".")[0])
)

# 4. Final rename starting from frame_0001.webp
for i, filename in enumerate(temp_files, start=1):
    os.rename(filename, f"frame_{i:04d}.webp")

print("✅ Rename complete — order preserved correctly")
