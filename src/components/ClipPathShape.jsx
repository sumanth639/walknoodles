import React from 'react';

const ClipPathShape = () => {
  // The shape is achieved by defining a polygon that covers the entire area
  // except for a rounded section in the bottom-left corner.
  // Using a polygon with a specific radius for the corner can be tricky.
  // A simpler way to get a similar, but squared-off-rounded corner, is with a custom polygon.
  // However, since the image shows a definite *curve*, the 'path()' function with an SVG path
  // or a more complex polygon/combination of CSS properties would be ideal for perfect replication.

  // For simplicity and a close approximation using basic clip-path:
  // We'll define a polygon that cuts off a small square from the corner,
  // making it look somewhat like the desired shape (though not perfectly rounded).

  const clipPathStyle = {
    // This example uses a simplified polygon to show how clip-path works:
    // It creates a rectangle and "cuts off" a small triangle/square from the bottom-left.
    // To mimic the *rounded* cut, we'll try to emulate it with more points for a sharper corner,
    // but the best way for a smooth curve is 'clip-path: path(...)'.
    // Since you asked for 'simple react tailwind and use clipath', let's use a simpler polygon that *resembles* the effect.

    // A better representation of a curved bottom-left corner:
    // Start at (0, 0), go to (100%, 0), then (100%, 100%), then along the bottom edge,
    // and finally back to (0, 0), making a cut where the curve is.

    // Let's use an **approximated polygon** for the curve:
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 85%, 0% 100%)', // This will result in a complex cut. Let's simplify.

    // The image looks like a standard rectangle with the bottom-left corner *cut out* with a large radius.
    // This is often done using a combination of `border-radius` and an `overflow: hidden` container
    // or by using the `path()` function in `clip-path`.

    // **Using `path()` is the most accurate way for the curve:**
    // This is the most accurate way to reproduce the curve, but it requires an SVG path string.
    // For a rectangle (500x300) with a bottom-left radius of 50:
    // clipPath: 'path("M0 0 H500 V300 H50 A50 50 0 0 1 0 250 Z")',

    // **Alternative: Use a large top/right radius and a small container:** (Simpler CSS, but not strictly `clip-path` on the main shape)

    // **Simple Polygon Approximation (Less accurate curve):**
    // This creates a cut-off corner, but it's *straight*, not *curved*.
    // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 80%)',

    // **Let's use a simple `border-radius` on a container for the *visual effect* (Often preferred in Tailwind):**
    // Although you asked for `clip-path`, using Tailwind's `rounded-bl-*` class inside an `overflow-hidden` container
    // would be the *Tailwind way* to get a similar visual effect if the content below is black.

    // **Sticking to `clip-path` for the intended method:**
    // For a **clean, curved clip-path** without the complex `path()` function, we'll use a shape that has that property, like `inset`, but that doesn't work for one corner.
    // We *must* use `path()` or a very complex `polygon` to get the curve. Let's use `path()` as it's the intended method for curves in `clip-path`.

    clipPath: 'path("M 0 0 H 300 V 200 H 50 A 50 50 0 0 1 0 150 Z")',
    // M 0 0: Move to (0, 0) (Top-left)
    // H 300: Horizontal line to x=300 (Top-right)
    // V 200: Vertical line down to y=200 (Bottom-right)
    // H 50: Horizontal line left to x=50
    // A 50 50 0 0 1 0 150: Arc with radius 50, 50, ending at (0, 150) (the curved corner)
    // Z: Close the path back to (0, 0)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-[300px] h-[200px] shadow-xl">
        {/* The main shape with the yellow-orange color */}
        <div
          className="w-full h-full bg-yellow-400 absolute top-0 left-0"
          style={clipPathStyle}
        >
          {/* This content can be anything inside the clipped area */}
        </div>

        {/* The black section underneath (simulating the background/area below the curve) */}
        {/* This is simply to show the cut-out clearly against the black */}
        <div className="w-full h-full bg-black absolute top-[150px] left-0">
          {/* A black block to make the cut-out visible */}
        </div>
      </div>
    </div>
  );
};

export default ClipPathShape;