function setPage(pageCount){
    //var pageCount = data.pageCount;
    var pageHtml = '';
    var start , end;
    if(listPage < 6){
        start = 1;
    }else{
        start = listPage - 5;
    }
    if(listPage > pageCount - 5){
        end = pageCount;
    }else{
        end = listPage + 5;
    }

    if(listPage > 1){
        pageHtml += '<span>上一页</span>';
    }
    for(var i = start , page_cur = '' ; i <= end ; i++){
        if(listPage == i){
            page_cur = 'page_cur';
        }else{
            page_cur = '';
        }
        pageHtml += '<span class="' + page_cur + '">' + i + '</span>';
    }
    if(listPage < pageCount){
        pageHtml += '<span>下一页</span>';
    }
    $('.page_show').empty().append(pageHtml);
}

//切换页面
$('body').on('click','.page_show span',function(){
    var $this = $(this);
    if($this.hasClass('page_cur')){
        return;
    }
    var page = $this.html();
    if(page == '上一页'){
        listPage = listPage - 1;
    }else if(page == '下一页'){
        listPage = listPage + 1;
    }else{
        listPage = parseInt(page);
    }
    //根据页码获取当前页列表数据
    getData();
});

var listPage = 1;
getData();
function getData(){
    setPage(30);
}

