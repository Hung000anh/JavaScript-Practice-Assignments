class Rectangle {
    constructor(width, height) {
        this.width = width;  // calls the setter
        this.height = height;
    }

    // Setter with validation
    set width(value) {
        if (value < 0) {
            throw new Error("Width cannot be negative.");
        }
        this._width = value;
    }

    set height(value) {
        if (value < 0) {
            throw new Error("Height cannot be negative.");
        }
        this._height = value;
    }

    // Getters
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._width * this._height;
    }
}

// Create rectangle
const rect = new Rectangle(10, 20);

// Modify via setter
rect.width = 30;
rect.height = 40;

// Output
const output = document.getElementById("output");
output.textContent = `
Rectangle Details:
Width: ${rect.width}
Height: ${rect.height}
Area: ${rect.area}
`;
