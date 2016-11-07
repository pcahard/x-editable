(function ($) {
    "use strict";
    
    var Checkbox = function (options) {
        this.init('checkbox', options, Checkbox.defaults);
    };
    
    $.fn.editableutils.inherit(Checkbox, $.fn.editabletypes.abstractinput);

    $.extend(Checkbox.prototype, {
        value2input: function(value) {
            var checked = ('1' === value)?true:false;
            this.$input.prop('checked', checked);
        },  
        
       input2value: function() { 
           if(this.$input.length === 1) {
               var val = ($(this.$input[0]).is(':checked'))?'true':'false';
               return val;
           }
       },
       value2html: function(value, element) {
           var checkboxClass = (value === 'true')?'check':'unchecked';
            $('a', element).html(
                $('<span title="" class="glyphicon glyphicon-'+checkboxClass+'" />')
                    .html('&nbsp;')
            ).attr('data-type',"checkbox").attr('value',value).addClass('editable');
            $('a', element).attr('value',value);
       }
//       ,
//       html2value: function(html) {
//           
//           console.log($('<div>').html(html).text());
//           
//           var value = $(html).attr('value');
//           
//           var checkboxClass = (value === '0')?'unchecked':'check';
//           
//           return '<a><span class="glyphicon glyphicon-check"/></a>'
//           
//           return $('<a>').html(
//                    $('<span title="" class="glyphicon glyphicon-'+checkboxClass+'" />')
//                        .html('&nbsp;')
//                ).attr('data-type',"checkbox").attr('value',value).addClass('editable').text();
//       },
    });      

    Checkbox.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {
        /**
        @property tpl 
        @default <div></div>
        **/         
        tpl:'<input type="checkbox" class="editable-checkbox"/>',
        
        /**
        @property inputclass 
        @type string
        @default null
        **/         
        inputclass: null,        
        
        /**
        Separator of values when reading from `data-value` attribute

        @property separator 
        @type string
        @default ','
        **/         
        separator: ','
    });

    $.fn.editabletypes.checkbox = Checkbox;

}(window.jQuery));