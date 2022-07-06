<script>
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
container.onclick = e => {
const elClass = e.target.classList;
// change the rating if the user clicks on a different star
if (!elClass.contains('active')) {
items.forEach( // reset the active class on the star
item => item.classList.remove('active')
);
console.log(e.target.getAttribute("data-rate"));
elClass.add('active'); // add active class to the clicked star
}
};
</script>

<template>
  <div>
    <ul class="rating">
<li class="rating-item" data-rate="1"></li>
<li class="rating-item active" data-rate="2"></li>
<li class="rating-item" data-rate="3"></li>
<li class="rating-item" data-rate="4"></li>
<li class="rating-item" data-rate="5"></li>
</ul>
  </div>
</template>
<style lang="scss" scoped>
.rating {
display: flex;
padding: 0;
margin: 0;
}

.rating li {
list-style-type: none
}

.rating-item {
border: 1px solid #fff;
cursor: pointer;
font-size:2em;
color: yellow;
}

/* initial: make all stars full */
.rating-item::before {
content: "\2605";
}

/* make until the clicked star (the rest) empty */
.rating-item.active ~ .rating-item::before {
content: "\2606";
}

/* on hover make all full */
.rating:hover .rating-item::before {
content: "\2605";
}

/* make until the hovered (the rest) empty */
.rating-item:hover ~ .rating-item::before {
content: "\2606";
}</style>