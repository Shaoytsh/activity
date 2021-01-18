#!/bin/bash
echo '删除原有docs'
rm -rf docs/
echo '将package  dist 文件 重命名docs'
mv dist/ docs/
echo  '查看结果'
ls docs/
