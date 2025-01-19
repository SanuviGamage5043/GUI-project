using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp_gui
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private UserInfoDbContext _db = new UserInfoDbContext();
        public MainWindow()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            userinfoGrid.ItemsSource = _db.Users.ToList();
        }

        private void Add_Info(object sender, RoutedEventArgs e)
        {
            UserInfo userinfo = new UserInfo();

            UserInfoWindow uWindow = new UserInfoWindow(userinfo);
            if (uWindow.ShowDialog() == true)
            {
                _db.Users.Add(userinfo);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Delete_Info(object sender, RoutedEventArgs e)
        {
            if (userinfoGrid.SelectedItem is UserInfo u)
            {
                _db.Users.Remove(u);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Update_Info(object sender, RoutedEventArgs e)
        {
            if (userinfoGrid.SelectedItem is UserInfo u)
            {
                UserInfo userinfo = new UserInfo();
                userinfo.Id = u.Id;
                userinfo.Username = u.Username;
                userinfo.Password = u.Password;


                UserInfoWindow uWindow = new UserInfoWindow(userinfo);
                if (uWindow.ShowDialog() == true)
                {
                    u.Username = userinfo.Username;
                    u.Password = userinfo.Password;
                    _db.Users.Update(u);
                    LoadData();
                    _db.SaveChanges();
                    LoadData();
                }
            }

        }
    }
}