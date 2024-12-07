// @ts-check

// You can still use kaboom() instead of obxia()!
kaboom();

addKaboom(center());

onKeyPress(() => addKaboom(mousePos()));
onMouseMove(() => addKaboom(mousePos()));
