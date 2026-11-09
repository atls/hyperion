# CircleProgress

Pass `value` from 0 to 100 for determinate progress. Omit it for an indeterminate animation.

```tsx
import { CircleProgress, circleProgressAnimations } from '@atls-ui-parts/progress'

<CircleProgress aria-label='Loading' animation={circleProgressAnimations.orbit} />

<CircleProgress
  aria-label='Loading'
  animation={{ ...circleProgressAnimations.spinner, duration: '2s', easing: 'ease-in-out' }}
/>
```

Both built-in animations use the same public `CircleProgressAnimation` contract as consumer animations.
The component does not select rendering behavior by preset name.

```ts
import type { CircleProgressAnimation } from '@atls-ui-parts/progress'

const animation = {
  duration: '3s',
  easing: 'linear',
  segments: [
    {
      frames: [
        { at: 0, start: 0, end: 0.1 },
        { at: 1, start: 1, end: 1.1 },
      ],
    },
    {
      frames: [
        { at: 0, start: 0.4, end: 0.5 },
        { at: 1, start: 1.4, end: 1.5 },
      ],
    },
    {
      frames: [
        { at: 0, start: 0.8, end: 0.9 },
        { at: 1, start: 1.8, end: 1.9 },
      ],
    },
  ],
} satisfies CircleProgressAnimation
```

- `at` is a cycle fraction from 0 to 1. Frames are ordered by increasing `at`.
- `start` and `end` are contour positions, increasing clockwise. Position 0 is the upper tangent of the right corner; 0.5 is the opposite point at the lower left.
- Positions are not restricted to 0–1: moving from 0 to 1 makes a clockwise revolution; moving from 1 to 0 makes a counterclockwise revolution.
- `start === end` draws nothing. A segment covering the whole contour draws a closed loop.
- One shared clock drives all segments. CSS easing applies between each pair of neighboring frames.
- Endpoints are interpolated before wrapping onto the contour. Touching and overlapping intervals are merged before drawing, including across position 0.
- The cycle repeats. Its final normalized geometry should match its initial geometry for a seamless loop.
- `0ms` holds the initial frame. Reduced-motion preference also holds the initial frame.

Shape and appearance remain independent of animation. Default `shape.container` variants define the Figma dimensions and `padding`. Box padding defaults to zero. Consumers can supply their own dimensions and `padding`, or omit container dimensions to size from content. `appearance.indicator.background` accepts a CSS color or gradient.

`shape.container.padding` is the distance from the container edge to the box on each side. With a 64×20 container and a uniform 2px padding, the box is 60×16. It does not set the padding between text and the box edge.

`shape.indicator.overlap` is the fraction of the stroke placed inside the box: `0` puts the entire stroke outside, `0.5` puts half inside (the default), and `1` puts the entire stroke inside. An opaque box covers that inside portion; a transparent box leaves it visible. This setting does not change the box dimensions.

```tsx
const shape = {
  ...circleProgressShapes.md,
  indicator: { ...circleProgressShapes.md.indicator, overlap: 0 },
}
```
