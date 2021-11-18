#!/bin/bash

npm run build
echo '删除原有docs'
rm -rf docs/
echo '将package  dist 文件 重命名docs'
mv dist/ docs/
echo  '查看结果'
ls docs/

echo '移动到tlactivity_gitee'
rm -rf ../activity_gitee/docs/
cp -r docs/ ../activity_gitee/docs/

# echo '移动到tlactivity_github'
# rm -rf ../tlactivity_github/docs/
# cp -r docs/ ../tlactivity_github/docs/
