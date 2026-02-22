<?php include('header.php'); ?>
<section class="py-20 px-6 max-w-4xl mx-auto">
    <div class="glass p-10 rounded-3xl">
        <div class="flex items-center justify-between mb-10">
            <h2 class="text-2xl font-bold text-white">حالة الأنظمة (System Status)</h2>
            <div class="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span class="text-green-500 text-sm font-bold">كل الأنظمة تعمل بكفاءة</span>
            </div>
        </div>

        <div class="space-y-6">
            <div class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                    <p class="text-white font-semibold">Sweden Node (Stockholm)</p>
                    <p class="text-xs text-gray-500 italic">Ryzen 9 5950X - NVMe Storage</p>
                </div>
                <span class="text-green-400 text-sm">99.9% Uptime</span>
            </div>
            <div class="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                <div>
                    <p class="text-white font-semibold">Canada Node (Torinto)</p>
                    <p class="text-xs text-gray-500 italic">Intel Xeon Scalable - SSD</p>
                </div>
                <span class="text-green-400 text-sm">99.8% Uptime</span>
            </div>
        </div>
    </div>
</section>
<?php include('footer.php'); ?>
