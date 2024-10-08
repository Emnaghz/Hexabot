/*
 * Copyright © 2024 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 * 3. SaaS Restriction: This software, or any derivative of it, may not be used to offer a competing product or service (SaaS) without prior written consent from Hexastack. Offering the software as a service or using it in a commercial cloud environment without express permission is strictly prohibited.
 */

import Link from "next/link";

import { RouterType } from "@/services/types";

export const HexabotLogo = () => {
  return (
    <Link
      href={RouterType.HOME}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="32"
        width="118.34"
        viewBox="0 0 163.07948 44.092343"
      >
        <defs>
          <linearGradient
            id="b"
            x1={-3.3010001}
            x2={62.193001}
            y1={231.105}
            y2={131.207}
            gradientTransform="rotate(14.075 -422.247 159.336) scale(.24047)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#a"
          />
          <linearGradient id="a">
            <stop offset={0} stopColor="#4dc4e6" stopOpacity={1} />
            <stop offset={0.473} stopColor="#73ca51" stopOpacity={1} />
            <stop offset={1} stopColor="#dce92e" stopOpacity={1} />
          </linearGradient>
        </defs>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.733053}
          d="M127.574 166.73h-4.544v-9.45h-8.86v9.45h-4.543V144.68h4.544v8.936h8.86v-8.936h4.543zm11.504.304q-3.605 0-5.877-2.212-2.256-2.21-2.256-5.891v-.424q0-2.47.954-4.407.954-1.954 2.695-3 1.757-1.06 3.998-1.06 3.363 0 5.286 2.12 1.939 2.12 1.939 6.014v1.787h-10.435q.212 1.605 1.272 2.574 1.075.97 2.71.97 2.53 0 3.954-1.833l2.15 2.408q-.984 1.393-2.665 2.18-1.68.774-3.725.774zm-.5-13.45q-1.303 0-2.12.879-.804.879-1.03 2.514h6.088v-.348q-.03-1.454-.787-2.241-.758-.803-2.15-.803zm16.244 1.65l2.756-4.89h4.68l-4.665 8.026 4.861 8.36h-4.694l-2.923-5.149-2.909 5.15h-4.71l4.862-8.361-4.65-8.027h4.695zm19.318 11.497q-.303-.59-.44-1.47-1.59 1.773-4.134 1.773-2.408 0-3.999-1.393-1.575-1.395-1.575-3.515 0-2.605 1.924-3.998 1.939-1.393 5.589-1.408h2.014v-.94q0-1.135-.59-1.816-.576-.682-1.833-.682-1.106 0-1.742.53-.62.53-.62 1.454h-4.378q0-1.424.878-2.635.878-1.213 2.485-1.894 1.605-.697 3.604-.697 3.03 0 4.8 1.53 1.787 1.515 1.787 4.27v7.104q.016 2.332.652 3.529v.258zm-3.62-3.045q.97 0 1.787-.424.818-.44 1.212-1.166v-2.817h-1.636q-3.286 0-3.498 2.272l-.015.257q0 .818.575 1.348.576.53 1.575.53zm25.8-4.998q0 3.938-1.68 6.15-1.682 2.196-4.696 2.196-2.665 0-4.255-2.046l-.197 1.743h-3.938v-23.263h4.377v8.345q1.514-1.773 3.983-1.773 2.998 0 4.695 2.212 1.712 2.196 1.712 6.194zm-4.377-.318q0-2.483-.787-3.62-.788-1.15-2.348-1.15-2.09 0-2.877 1.71v6.468q.803 1.726 2.908 1.726 2.12 0 2.786-2.09.318-1 .318-3.044zm6.673.016q0-2.438.939-4.347.939-1.909 2.695-2.954 1.772-1.045 4.104-1.045 3.318 0 5.408 2.03 2.105 2.03 2.347 5.513l.03 1.12q0 3.772-2.105 6.058-2.105 2.273-5.649 2.273t-5.664-2.273q-2.105-2.27-2.105-6.178zm4.376.318q0 2.332.88 3.574.877 1.226 2.513 1.226 1.59 0 2.484-1.21.894-1.228.894-3.908 0-2.287-.894-3.544-.894-1.257-2.515-1.257-1.605 0-2.483 1.257-.879 1.242-.879 3.862zm19.365-12.389v4.028h2.8v3.21h-2.8v8.18q0 .91.348 1.302.348.394 1.333.394.727 0 1.287-.106v3.316q-1.287.395-2.65.395-4.605 0-4.696-4.65v-8.83h-2.393v-3.21h2.393v-4.029z"
          fontFamily="Roboto"
          fontSize="160px"
          fontWeight="bold"
          letterSpacing={1.45}
          style={{
            lineHeight: 1.2,
            whiteSpace: "pre",
          }}
          transform="translate(-62.42 -136.847)"
        />
        <g fillOpacity={1} strokeDasharray="none">
          <path
            d="M32.792 170.937l-4.32 7.588-2.825-7.6-8.327-.017a4.467 4.467 29.975 01-3.853-2.222l-6.534-11.243a4.275 4.275 89.838 01-.012-4.276l6.301-10.986a5.03 5.03 149.838 014.349-2.527l12.372-.035A4.782 4.782 29.838 0134.09 142l6.248 10.751a4.933 4.933 89.771 01.02 4.924z"
            fill="none"
            stroke="url(#b)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={1}
            strokeWidth={4.528}
            paintOrder="normal"
            transform="translate(-62.42 -136.847) matrix(1.0295 0 0 1.0295 57.623 -4.973) translate(.42 2.314) scale(.98608)"
            style={{
              mixBlendMode: "normal",
            }}
          />
          <g
            fill="#040606"
            fillRule="nonzero"
            stroke="none"
            strokeWidth={0.662}
          >
            <path
              d="M-532.348 630.303a6.253 6.253 0 11-12.506.023 6.253 6.253 0 0112.506-.023"
              transform="translate(-62.42 -136.847) matrix(1.0295 0 0 1.0295 57.623 -4.973) matrix(.25113 0 0 .25263 -27.6 133.42) matrix(1.51171 0 0 1.50275 1044.41 -860.854)"
            />
            <path
              d="M-532.348 630.303a6.253 6.253 0 11-12.506.023 6.253 6.253 0 0112.506-.023"
              transform="translate(-62.42 -136.847) matrix(1.0295 0 0 1.0295 57.623 -4.973) matrix(.25113 0 0 .25263 -27.6 133.42) matrix(1.51171 0 0 1.50275 992.8 -860.854)"
            />
            <path
              d="M-532.348 630.303a6.253 6.253 0 11-12.506.023 6.253 6.253 0 0112.506-.023"
              transform="translate(-62.42 -136.847) matrix(1.0295 0 0 1.0295 57.623 -4.973) matrix(.25113 0 0 .25263 -27.6 133.42) matrix(1.51171 0 0 1.50275 1018.605 -860.854)"
            />
          </g>
        </g>
      </svg>
    </Link>
  );
};
