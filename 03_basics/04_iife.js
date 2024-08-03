(function chai() {
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Two Connected ${name}`);
})('Rohit');
