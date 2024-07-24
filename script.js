document.addEventListener('DOMContentLoaded', function() {
    // 例如：从 TradingView 加载小部件
    new TradingView.widget({
        "width": 980,
        "height": 610,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "show_popup_button": true,
        "save_image": false,
        "container_id": "tradingview_12345"
    });
});
