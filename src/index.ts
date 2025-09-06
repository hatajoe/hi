#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import chalkAnimation from 'chalk-animation';

const iconPath = join(__dirname, 'icon.txt');
const icon = readFileSync(iconPath, 'utf-8');
const profilePath = join(__dirname, 'hi.txt');
const profile = readFileSync(profilePath, 'utf-8');

console.log(icon);

const anim = chalkAnimation.neon(profile, 0.5);

setTimeout(() => {
  anim.stop();
}, 10000);
