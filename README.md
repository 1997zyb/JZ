1.生成 SSH 密钥对
    在命令行中运行 ssh-keygen -t rsa -b 4096 -C "你的邮箱地址" 来生成一个新的 SSH 密钥对

2.添加 SSH 公钥到 GitHub
    运行 cat ~/.ssh/id_rsa.pub 来查看你的公钥。
    登录 GitHub，进入 Settings -> SSH and GPG keys -> New SSH key，然后粘贴你的公钥

3.配置 Git 使用 SSH
    git remote set-url origin git@github.com:1997zyb/JZ.git

4.测试 SSH 连接
    运行 ssh -T git@github.com 来测试你的 SSH 连接。如果一切正常，你会看到一条欢迎消息