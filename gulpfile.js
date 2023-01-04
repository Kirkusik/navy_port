import gulp from "gulp"; // Основной модуль
import { path } from "./gulp/config/path.js"; // Импорт путей
import { plugins } from "./gulp/config/plugins.js"; // Импорт общих плагинов

// Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

// Импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

function fonts() {
    return app.gulp.src("./src/fonts/**/*.*").pipe(gulp.dest(path.build.fonts));
}

export { svgSprive };

// Основные задачи
const mainTasks = gulp.series(gulp.parallel(html, scss, js, images));
// Построение сценариев выполнения задач
const dev = gulp.series(
    reset,
    fonts,
    mainTasks,
    gulp.parallel(watcher, server)
);
const build = gulp.series(reset, fonts, mainTasks);

// Экспорт сценариев
export { dev };
export { build };

// Выполнение сценария по умолчанию
gulp.task("default", dev);
