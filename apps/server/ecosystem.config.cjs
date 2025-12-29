module.exports = {
  apps: [
    {
      name: "flash-cards-server",
      script: "bun",
      args: "run start:prod",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: "3000"
      },
      instances: 1, // Single instance para evitar problemas de sessão
      exec_mode: "fork", // Fork mode para melhor compatibilidade com Better Auth
      watch: false,
      max_memory_restart: "1G",
      out_file: "./logs/app-out.log",
      error_file: "./logs/app-err.log",
      merge_logs: true,
      time: true,
      restart_delay: 5000,
      max_restarts: 10,
      min_uptime: "10s"
    }
  ]
}
