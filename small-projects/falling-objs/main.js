import anime from 'animejs/lib/anime.es.js';
const hex_values = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
];
const pallet_colors = ["#A8A4E6", "#EC776A", "#EE8B67", "#F0B9C2", "#F8E9B4", "#F1CC13", "#8FDF8F", "#858EF7", "#9DE9F7", "#228B22"]

const interval = 500
let width = null
let height = null

class Box {
    constructor(bg_color, x_pos) {
        this.element = document.createElement("div")
        this.element.innerHTML = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill=${bg_color} />        </svg>`
        this.element.className = "box"
        this.element.style.left += x_pos + "px"
        document.body.appendChild(this.element)
        this.animation()
    }
    animation() {
        anime({
            targets: this.element,
            translateY: [-20, height],
            duration: 100000,
            update: () => {
                const obj_pos = this.element.getBoundingClientRect()
                if (obj_pos.top >= height) {
                    anime.remove(this.element)
                    this.element.remove()
                }

            }
        })
    }
}

const generate_random_color = () => {
    let output_color = "#"
    for (let i = 0; i <= 5; ++i) {
        output_color += hex_values[Math.floor(Math.random() * hex_values.length)]
    }
    return output_color

}
const main = () => {
    const random_color = pallet_colors[Math.floor(Math.random() * pallet_colors.length)]
    const random_x = Math.floor(Math.random() * width)
    new Box(random_color, random_x)
}
document.addEventListener('DOMContentLoaded', function() {
    width = document.body.scrollWidth
    height = document.body.scrollHeight
    setInterval(main, interval)
});
