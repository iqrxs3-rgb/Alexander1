<?php include('config.php'); ?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title><?php echo $site_name; ?> | Premium Hosting</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        body { background-color: #050810; color: #e2e8f0; font-family: sans-serif; }
        .glass { background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.05); }
    </style>
</head>
<body>
    <nav class="glass sticky top-0 z-50 p-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="text-2xl font-black text-white">ACE<span class="text-blue-500">HOST</span></div>
            <div class="hidden md:flex space-x-reverse space-x-6 text-sm">
                <a href="index.php">الرئيسية</a>
                <a href="hosting.php">الاستضافة</a>
                <a href="api.php">API</a>
                <a href="founders.php">الفريق</a>
            </div>
            <a href="<?php echo $discord_link; ?>" class="bg-blue-600 px-4 py-2 rounded font-bold text-xs">Discord</a>
        </div>
    </nav>
