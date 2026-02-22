<?php include('header.php'); ?>
<section class="py-20 px-6 max-w-5xl mx-auto">
    <div class="glass p-10 rounded-3xl border border-white/10">
        <h2 class="text-3xl font-bold mb-6 text-blue-500">Developer API (v1.0)</h2>
        <p class="text-gray-400 mb-8 leading-relaxed">تتيح لك واجهة برمجة تطبيقات Ace Host دمج خدماتنا مباشرة في تطبيقاتك أو لوحة التحكم الخاصة بك لأتمتة العمليات بالكامل.</p>
        
        <div class="bg-black/40 p-5 rounded-xl font-mono text-sm mb-8 overflow-x-auto">
            <p class="text-green-400 mb-2">// مثال لطلب حالة السيرفر</p>
            <span class="text-purple-400">GET</span> https://api.acehost.us.ci/v1/status/{server_id}
        </div>

        <h4 class="text-lg font-bold text-white mb-4">ماذا يمكنك أن تفعل بالـ API؟</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div class="flex items-center gap-3"><i class="fas fa-code text-blue-500"></i> التحكم في تشغيل/إيقاف السيرفرات</div>
            <div class="flex items-center gap-3"><i class="fas fa-database text-blue-500"></i> إدارة قواعد البيانات برمجياً</div>
            <div class="flex items-center gap-3"><i class="fas fa-shield-alt text-blue-500"></i> مراقبة الحماية في الوقت الفعلي</div>
            <div class="flex items-center gap-3"><i class="fas fa-chart-line text-blue-500"></i> تتبع استهلاك الموارد (Stats)</div>
        </div>
    </div>
</section>
<?php include('footer.php'); ?>
