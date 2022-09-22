const options = [
    { value: 'eks', label: 'manage eks' },
    { value: 'install', label: 'install aws command-line app' },
];

export const primaryOptions = options.sort((x, y) => {
    if (x.value < y.value) {
        return -1;
    }
    if (x.value > y.value) {
        return 1;
    }
    return 0;
});
