export const increment = ({ state }) => ({
    count: state.count + 1,
});

export const decrement = ({ state }) => ({
    count: state.count - 1,
});
