/*
 * Copyright © 2024 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 * 3. SaaS Restriction: This software, or any derivative of it, may not be used to offer a competing product or service (SaaS) without prior written consent from Hexastack. Offering the software as a service or using it in a commercial cloud environment without express permission is strictly prohibited.
 */

import path from 'path';

import { StreamableFile } from '@nestjs/common';
import { Resvg } from '@resvg/resvg-js';

import { isEmpty } from './misc';
import { generateBotAvatarSvg, generateUIAvatarSvg } from './svg';

export const generateAvatarSvg = async (svg: string) => {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'height', value: 50 },
    textRendering: 1,

    font: {
      fontFiles: [path.join(process.cwd(), 'assets/Roboto-Regular.ttf')],
    },
  });
  const renderedSvg = resvg.render();
  const renderedImage = renderedSvg.asPng();
  return new StreamableFile(renderedImage);
};

export const generateInitialsAvatar = async (name: {
  first_name: string;
  last_name: string;
}) => {
  const svg = generateUIAvatarSvg({
    text: getInitials(name),
    bgColor: '#DBDBDB',
  });
  return await generateAvatarSvg(svg);
};

export const getBotAvatar = async () => {
  const svg = generateBotAvatarSvg({});
  return await generateAvatarSvg(svg);
};

const getInitials = (name: { first_name: string; last_name: string }) => {
  if (isEmpty(name.first_name)) {
    const string = name.first_name.trim().slice(0, 2);
    return string.toUpperCase();
  }
  if (isEmpty(name.last_name)) {
    const string = name.last_name.trim().slice(0, 2);
    return string.toUpperCase();
  }
  return `${name.first_name.trim()[0]}${
    name.last_name.trim()[0]
  }`.toUpperCase();
};