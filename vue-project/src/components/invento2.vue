
<script>
let cont;
function calificar(item){
    console.log(item)
    cont=item.id[0];
    let nombre = item.id.substring(1);
    for(let i=0;i<5;i++){
        if(i<cont){
            document.getElementById((i+1)+nombre).style.color="orange";
        }
    }
}
</script>
<template>
    <div>
<span class="fa fa-star" id="1star" onclick="calificar(this)"></span>
<span class="fa fa-star" id="2star" onclick="calificar(this)"></span>
<span class="fa fa-star" id="3star" onclick="calificar(this)"></span>
<span class="fa fa-star" id="4star" onclick="calificar(this)"></span>
<span class="fa fa-star" id="5star" onclick="calificar(this)"></span>

    </div>
</template>

<style lang="scss" scoped>
</style>