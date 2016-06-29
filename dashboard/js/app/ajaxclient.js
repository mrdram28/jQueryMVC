define(function () {

    function _do(type, url, data)
    {
        return $.ajax({
            url:url,
            type:type,
            dataType:'json',
            contentType: 'application/json; charset=utf-8',
            data: data,
            beforeSend: _onStartAjax                
        }).always(_onEndAjax);
    }

    function _onStartAjax()
    {
        console.log("starting ajax call");
    }

    function _onEndAjax()
    {
        console.log("finished ajax call");
    }

    return {
        do:_do
    }
});

