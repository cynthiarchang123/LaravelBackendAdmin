/**
 * 蝞���梶���𡑒”撌血𢰧皛穃𢆡���揢�����
 * 曌䭾���衤辣�糓�喲睸嚗��䭾迨嚗䔶�鈭𥟇㺭�澆�蹱香�銁�䲮瘜蓥葉嚗𣬚滲瘚贝�閧鍂
 */
 
define(function(require, exports, module) {
	var Event = require("addEvent.js");
	var _timer, _move = function(ele, to, from) {
		from = from || parseFloat(ele.style.left) || 0;	
		if (Math.abs(to - from) > 2) {
			ele.style.left = (to - (to - from) / 3) + "px";
			_timer = setTimeout(function() {
				_move(ele, to);					
			}, 50);
		} else {
			ele.style.left = to + "px";
		}		
	};
	return {
		index: 0,
		visible: 4,
		init: function(box) {
			var length, self = this;
			if (!box) return;
			length = box.getElementsByTagName("li").length;
			Event.addEvent(box.parentNode, "mousewheel", function(event) {
				 if (event.delta > 0 && self.index > 0) {
					// 敺�銝𦠜��
					self.index--;
				 } else if (event.delta < 0 && self.index < length - self.visible) {
					 // 敺�銝�
					 self.index++;					 
				 } else {
					return; 
				 }
				 
				 clearTimeout(_timer);
				 _move(box, -1 * self.index * 140);
				 
				 event.preventDefault();
			});
		}
	};
});
 
 
 