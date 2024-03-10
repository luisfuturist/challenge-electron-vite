import { map, perlin } from "./utils.js";

export const GRID_SIZE = 4;
export const RESOLUTION = 10;
export const COLOR_SCALE = 360;
export const num_pixels = GRID_SIZE / RESOLUTION;
window.x = 0;

const memNoise = perlin();
memNoise.seed();

export function useMemNoise() {
    return memNoise;
}

export const totalmem = () => 8204058624;
export const hostname = () => "mocked_hostname";
export const homedir = () => "/home/luisfuturist/";
export const platform = () => "linux";
export const type = () => "Linux";
export const release = () => "0.0.0";
export const endianness = () => "LE";

export function freemem() {
    let mockedData = parseInt(memNoise.get(window.x, 0) * COLOR_SCALE);
    const free = map(mockedData, -COLOR_SCALE, COLOR_SCALE, 0, totalmem());
    window.x += num_pixels / GRID_SIZE;
    return free;
};

const randomUptime = Math.random() * 60 * 60 * 24;

export function uptime() {
    return new Date().getSeconds() + randomUptime;
}

export const userInfo = () => ({
    name: "luisfuturist",
    uid: "1000",
    gid: "1000",
    shell: "/bin/bash",
});

export const arch = () => "x64";

export const cpus = () => {
    const cpuInfoArray = [];
    const cpuInfo = () => ({
        model: "Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz",
        speed: 2700,
        times: {
            user: 11743180,
            nice: 30430,
            sys: 4107450,
            idle: 55302570,
            irq: 476420,
        },
    });
    cpuInfoArray.push(cpuInfo());
    cpuInfoArray.push(cpuInfo());
    cpuInfoArray.push(cpuInfo());
    cpuInfoArray.push(cpuInfo());

    return cpuInfoArray;
}