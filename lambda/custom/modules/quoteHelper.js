const rp=require('request-promise');

const quoteHelper={};

quoteHelper.getQuote=function(){
    return rp("https://api.quotable.io/random")
}

module.exports=quoteHelper;