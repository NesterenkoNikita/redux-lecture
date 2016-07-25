export const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: 'foo'});
        }, 1000);
    });
};
