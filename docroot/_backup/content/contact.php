<?php $form = false; ?>
<?php if($form) { ?>
<form>
  <ul>
    <li><label>Name</label><input type="text" name="name" id="name"></li>
    <li><label>Email</label><input type="email" name="email" id="email"></li>
    <li><label>Subject</label><input type="text" name="subject" id="subject"></li>
    <li><label>Message</label><textarea name="subject" id="subject"></textarea></li>
    <li><button>Submit</button></li>
  </ul>
</form>
<?php } else { ?>
        <ul>
          <li><span id="genemlink" data-em="[0,22,4,8,3,4,11,4,26,6,12,0,8,11,27,2,14,12]"></span></li>
        </ul>
<?php } ?>