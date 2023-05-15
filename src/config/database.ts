export type DatabaseConfig = {
  host?: string;
};

export default (): { database: DatabaseConfig } => {
  return {
    database: {
      host: process.env.DATABASE_HOST,
    },
  };
};
