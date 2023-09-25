package red.plaza.rdssslclient;

import java.sql.*;
import java.util.Properties;

public class MySQLSSLTest {

    private static String DB_USER = "username";
    private static String DB_PASSWORD = "password";
    // This key store has only the prod root ca.
    private static String KEY_STORE_FILE_PATH = "file-path-to-keystore";
    private static String KEY_STORE_PASS = "keystore-password";

    public static void main(String[] args) throws Exception {
        DB_USER = args[0];
        DB_PASSWORD = args[1];
        KEY_STORE_FILE_PATH = args[2];
        KEY_STORE_PASS = args[3];
        Class.forName("com.mysql.jdbc.Driver");

        System.setProperty("javax.net.ssl.trustStore", KEY_STORE_FILE_PATH);
        System.setProperty("javax.net.ssl.trustStorePassword", KEY_STORE_PASS);

        Properties properties = new Properties();
        properties.setProperty("sslMode", "VERIFY_IDENTITY");
        properties.put("user", DB_USER);
        properties.put("password", DB_PASSWORD);


        Connection connection = null;
        Statement stmt = null;
        ResultSet rs = null;
        try {
            connection = DriverManager.getConnection("jdbc:mysql://rds-cert-test-2.c3iilnukj9yy.us-east-1.rds.amazonaws.com:3306", properties);
            stmt = connection.createStatement();
            rs = stmt.executeQuery("SELECT 1 from dual");
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) {
                }
            }
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) {
                }
            }
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return;
    }
}
            