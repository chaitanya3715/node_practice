#include <graphics.h>
#include <stdlib.h>
#include <math.h>

void draw_line(int x0, int y0, int x1, int y1) {
    int dx = abs(x1 - x0), sx = x0 < x1? 1 : -1;
    int dy = abs(y1 - y0), sy = y0 < y1? 1 : -1;
    int err = (dx > dy? dx : -dy) / 2, e2;

    for (;;) {
        putpixel(x0, y0, RED);
        if (x0 == x1 && y0 == y1) break;
        e2 = err;
        if (e2 > -dx) { err -= dy; x0 += sx; }
        if (e2 < dy) { err += dx; y0 += sy; }
    }
}

int main() {
    int gd = DETECT, gm;
    initgraph(&gd, &gm, NULL);

    int x0 = 100, y0 = 100, x1 = 300, y1 = 300;
    draw_line(x0, y0, x1, y1);

    getch();
    closegraph();
    return 0;
}