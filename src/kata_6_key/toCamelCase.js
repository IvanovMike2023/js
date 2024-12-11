function toCamelCase(str) {
    str = str.replace(/[^a-zа-яё0-9\s]/gi, ' ');
    const capitalize = s => s.replace(/[^A-z]\b\w/g, c => c.toUpperCase());
    return str = capitalize(str).replaceAll(' ', '')
}

