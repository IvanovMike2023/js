function dist(v, mu) {
    const g = 9.81;
    const t = 1;

    const vms = v / 3.6; // km/h -> m/s

    const reaction = vms * t;
    const braking = (vms * vms) / (2 * mu * g);

    return reaction + braking;
}



function speed(d, mu) {
    const g = 9.81;

    const vms = (-2 * mu * g + Math.sqrt((2 * mu * g) ** 2 + 8 * mu * g * d)) / 2;

    return vms * 3.6; // m/s -> km/h
}