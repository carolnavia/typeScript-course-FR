"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName}, ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent", "navia");
    console.log({ superman });
})();