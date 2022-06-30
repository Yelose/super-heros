<script>

</script>
<template>
    <div>
        <form>
            <div class="score">
                <input id="radio1" type="radio" name="estrellas" value="5">
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4">
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3">
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2">
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1">
                <label for="radio5">★</label>
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
div {
    form {
        width: 250px;
        margin: 0 auto;
        height: 50px;
        .score {
            direction: rtl;
            unicode-bidi: bidi-override;

            input {
                display: none;
            }

            label {
                color: rgb(255, 255, 255);
                font-size: 20px;
                transition: transform 1s ease-out;
            }
        }

        label:hover,
        label:hover~label {
            color: orange;  
        }

        input:checked~label {
            color: orange;
        }
    }
}
</style>