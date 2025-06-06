import { PI, getCircumference, getArea, getVolume } from './mathUtil.js';

const output = document.getElementById('output');

output.textContent = `
PI: ${PI}
Circumference of circle (r=5): ${getCircumference(5)}
Area of circle (r=5): ${getArea(5)}
Volume of cylinder (r=5, h=10): ${getVolume(5, 10)}
`;
