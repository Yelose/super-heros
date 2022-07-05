<script>
  $(function () {
        let container = $('#pagination');
        container.pagination({
            dataSource: [],
            pageSize: 5,
            callback: function (data, pagination) {
                var dataHtml = '<ul>';

                $.each(data, function (index, item) {
                    dataHtml += '<li>' + item.number + '</li>';
                });

                dataHtml += '</ul>';

                $("#container").html(dataHtml);
            }
        })
    })
</script>

<template>
  <div id="container"></div>
        <div id="pagination"></div>
</template>

<style lang="scss">

 
</style>