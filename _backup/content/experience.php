<section id="<?php echo $a; ?>">
  <div class="content-fluid">
  	<h2>Work Experience</h2>
  	<ul class="work-timeline">
<?php foreach($jobs as $key => $job) { ?>
	<li id="<?php echo $key; ?>">
    <strong><?php echo $job['start']; ?></strong>
		<div>
			<div>
				<h3><?php echo $job['company']; ?></h3>
				<p><?php echo $job['position']; ?></p>
			</div>
		</div>
	</li>
<?php } ?>
	</ul>
    <p><a href="<?php echo $root_url; ?>docs/Aaron-Weidele-Resume.pdf"><i class="icon-file-text-o"></i> Download resume in PDF format</a></p>
  </div>
</section>