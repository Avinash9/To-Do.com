
		function addValueInLi(element)
		{
			var node = $(element);
			var text=node.val();
			node.parent().prepend('<li > '+$(element).val()+' </li>');
		}
		function showNewConatainer() {
			
			var textArea = document.getElementById("collabaratorText").value;
			var nameArea = document.getElementById("nameToAdd");
			nameArea.innerHTML = textArea;
			var a = '<div class="span3 containerLayout">'
					+ $('#hiddenContainer').html() + '</div>'
			$('#colabratorContainer').before(a)
			var users = ['Avinash', 'Arpit', 'Bittu', 'Vikas', 'Shubham', 'Vineet', 'Shishupal', 'Anshu', 'Himanshu', 'Sri', 'Sandeep', 'Vikas', 'Shishupal', 'Shilpa'].sort();
            $(".typeaheadDemo").typeahead({source: users, items:5});
			
			
		}
		jQuery(document).ready(function() {
            var users = ['Avinash', 'Arpit', 'Bittu', 'Vikas', 'Shubham', 'Vineet', 'Shishupal', 'Anshu', 'Himanshu', 'Sri', 'Sandeep', 'Vikas', 'Shishupal', 'Shilpa'].sort();
            $(".typeaheadDemo").typeahead({source: users, items:5});
        });
	