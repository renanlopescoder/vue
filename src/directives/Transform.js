import Vue from "vue";

function transform(el, binding, current) {
    const increment = binding.value || 90;
    let effect;

    if (!binding.arg || binding.arg == "rotate") {
        if (binding.modifiers.reverse) {
            current -= increment;
        } else {
            current += increment;
        }
        effect = `rotate(${current}deg)`;
    } else if (binding.arg == "scale") {
        effect = `scale(${increment})`;
    }

    el.style.transform = effect;

    if (binding.modifiers.animate) el.style.transition = "transform 0.5s";

    return current;
}

Vue.directive("rl-transform", {
    bind(el, binding) {
        let current = 0;
        el.addEventListener("click", function() {
            current = transform(el, binding, current);
        });
    },
});
