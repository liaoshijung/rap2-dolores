# BUILDING
FROM registry.cn-hangzhou.aliyuncs.com/westsoft/node:16.20.2 AS builder

WORKDIR /app

COPY . ./

# 替换后端端口地址配置文件
COPY docker/config.prod.ts ./src/config/config.prod.ts

# 在国内打开下面一行加速
RUN npm config set registry https://registry.npm.taobao.org/ && npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass

RUN npm install cnpm -g

RUN cnpm install && \
    cnpm install typescript -g

RUN npm run lint && \
    npm run build

# nginx
FROM registry.cn-hangzhou.aliyuncs.com/westsoft/nginx:stable-alpine

COPY --from=builder app/build /dolores
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d/
