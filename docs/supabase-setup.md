# Supabase 数据库连接指南

## 准备工作

确保已安装并配置好 Claude Code，以及项目依赖（`npm install` 已运行完成）。

---

## 步骤一：将 Supabase MCP 添加到 Claude Code

在终端运行以下命令，将 Supabase MCP 服务添加到 Claude Code：

```bash
claude mcp add supabase --transport http "https://mcp.supabase.com/mcp"
```

系统会提示你在浏览器中完成身份验证，按提示操作即可。

---

## 步骤二：在浏览器中完成身份验证

MCP 添加后，Claude Code 会自动打开浏览器页面，要求你登录 Supabase 账号并授权访问。完成授权后返回终端。

---

## 步骤三：创建新的 Supabase 项目

1. 登录 [Supabase Dashboard](https://supabase.com/dashboard)
2. 点击 "New project"
3. 填写项目名称（例如：`malaysia-uni-platform`）
4. 选择离用户最近的区域（推荐 Singapore）
5. 设置数据库密码（请妥善保存）
6. 等待项目创建完成（约 1-2 分钟）

---

## 步骤四：获取连接字符串并配置 .env.local

1. 进入项目 Dashboard → **Settings** → **Database**
2. 向下滚动找到 **Connection string** 部分
3. 复制 **URI** 格式的连接字符串（用于 `DATABASE_URL`，需开启 pgBouncer 模式）
4. 复制 **Direct connection** 字符串（用于 `DIRECT_URL`）

在项目根目录创建 `.env.local` 文件（参考 `.env.local.example`）：

```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"
```

将 `[YOUR-PASSWORD]` 替换为你在步骤三中设置的数据库密码，`[YOUR-PROJECT-REF]` 替换为项目 ID（可在 Dashboard URL 中找到）。

---

## 步骤五：推送数据库结构

运行以下命令，将 Prisma schema 推送到 Supabase，创建所有数据表：

```bash
npx prisma db push
```

成功后会看到所有表已创建的提示。

---

## 步骤六：填充种子数据

运行以下命令，向数据库写入初始大学和专业数据：

```bash
npx prisma db seed
```

成功后会看到各大学和专业数据导入完成的提示。

---

## 步骤七：验证数据

使用 Prisma Studio 可视化查看数据库内容：

```bash
npx prisma studio
```

浏览器会自动打开 `http://localhost:5555`，可在其中浏览所有表的数据，确认种子数据已正确导入。

---

## 常见问题

**Q: `DATABASE_URL` 和 `DIRECT_URL` 有什么区别？**

`DATABASE_URL` 使用连接池（pgBouncer），适合高并发的生产环境；`DIRECT_URL` 是直连，用于 Prisma Migrate/db push 等需要直接操作数据库的命令。

**Q: db push 报错 "Environment variable not found: DATABASE_URL"**

确保 `.env.local` 文件在项目根目录，并且变量名拼写正确（无多余空格）。

**Q: 种子数据重复运行会出问题吗？**

种子脚本使用 `upsert`，重复运行是安全的，不会创建重复记录。

**Q: 如何在生产环境部署？**

将 `DATABASE_URL` 和 `DIRECT_URL` 添加到部署平台（如 Vercel）的环境变量中，然后在 CI/CD 流程中运行 `npx prisma db push`。
