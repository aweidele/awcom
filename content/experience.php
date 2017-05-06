<style type="text/css">
<?php
$today = intval(date('Y'));
$years = array();
foreach ($jobs as $key => $job) {
	$years[] = $job['start'];
}
$years[] = $today;
$range = $years[sizeof($years) -1] - $years[0];
$i = 1;
$p = 0;
foreach($jobs as $key => $job) { 
	$w = ($years[$i] - $job['start']) / $range * 100;
?>
	#<?php echo $key; ?> {
		width: <?php echo $w; ?>%;
		left: <?php echo $p; ?>%;
	}
<?php 
	$p += $w;
	$i++;
} ?>
</style>
<section id="<?php echo $a; ?>">
  <div class="content-fluid">
  	<h2>Work Experience</h2>
  	<ul class="work-timeline">
<?php foreach($jobs as $key => $job) { ?>
	<li id="<?php echo $key; ?>">
		<div>
			<div>
				<h3><?php echo $job['company']; ?></h3>
				<p><?php echo $job['position']; ?></p>
			</div>
		</div>
	</li>
<?php } ?>
	</ul>
  </div>
</section>