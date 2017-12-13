<template>
  <div class="header">
        <ul class="header-list">
            <li class="header-list__item--logo noselect">
                Olaf
            </li>
            <li class="header-list__item">
                <a class="header-list__item--link" href="#">item</a>
            </li>
            <li class="header-list__item">
                <a class="header-list__item--link" href="#">item</a>
            </li>
            <li class="header-list__item">
                <a class="header-list__item--link" href="#">item</a>
            </li>
            <li class="header-list__item">
                <a class="header-list__item--link" href="#">item</a>
            </li>
        </ul>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:700');
@import url('https://fonts.googleapis.com/css?family=Ubuntu');


    .header {

        .noselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
        }

        &-list__item--logo {
            font-family: 'Amatic SC', cursive;
            font-size: 4rem;
            list-style-type: none;
        }

        .header-list {
            display: flex;

            &__item {
                list-style-type: none;
                margin-left: 5%;
                margin-top: 2.5%;

                &--link {
                    text-decoration: none;
                    color: #000;
                    font-size: 1.3rem;
                }
            }
        }
    }

</style>