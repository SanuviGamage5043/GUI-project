using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WpfApp_gui
{
    /// <summary>
    /// Interaction logic for UserInfoWindow.xaml
    /// </summary>
    public partial class UserInfoWindow : Window
    {
        public UserInfo UserInfo { get; private set; }
        public UserInfoWindow(UserInfo userinfo)
        {
            InitializeComponent();
            UserInfo = userinfo;

            UsernameTextBox.Text = userinfo.Username;
            PasswordTextBox.Text = userinfo.Password;
        }
       

        private void Save_info(object sender, RoutedEventArgs e)
        {
            try
            {
                UserInfo.Username = UsernameTextBox.Text;
                UserInfo.Password = PasswordTextBox.Text;
                DialogResult = true;
                Close();
            }
            catch
            {
                MessageBox.Show("Error in input");
                DialogResult = false;
                Close();
            }
        }

        private void Cancel_info(object sender, RoutedEventArgs e)
        {

        }
    }
}
